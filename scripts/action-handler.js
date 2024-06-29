// System Module Imports
import { ACTION_TYPE, CARRY_TYPE_ICON, GEAR_TYPE, SKILL_TYPE, STAT_TYPE } from './constants.js'
import { Utils } from './utils.js'

export let ActionHandler = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    /**
     * Extends Token Action HUD Core's ActionHandler class and builds system-defined actions for the HUD
     */
    ActionHandler = class ActionHandler extends coreModule.api.ActionHandler {
        /**
         * Build system actions
         * Called by Token Action HUD Core
         * @override
         * @param {array} groupIds
         */
        async buildSystemActions(groupIds) {
            // Set actor and token variables
            this.actors = (!this.actor) ? this._getActors() : [this.actor]
            this.actorType = this.actor?.type

            // Settings
            this.displayUnequipped = Utils.getSetting('displayUnequipped')

            // Set items variable
            if (this.actor) {
                let items = this.actor.items
                items = coreModule.api.Utils.sortItemsByName(items)
                this.items = items
            }

            if (['character', 'mook'].includes(this.actorType)) {
                this.#buildCharacterActions()
            } else if (!this.actor) {
                this.#buildMultipleTokenActions()
            }
        }

        /**
         * Build character actions
         * @private
         */
        #buildCharacterActions() {
            this.#buildGear()
            this.#buildSkills()
            this.#buildStats()
        }

        /**
         * Build multiple token actions
         * @private
         * @returns {object}
         */
        #buildMultipleTokenActions() {
        }

        /**
         * Build gear
         * @private
         */
        async #buildGear() {
            // Exit if no items exist
            if (this.items.size === 0) return

            const actionTypeId = 'item'
            const gearMap = new Map()

            for (const [itemId, itemData] of this.items) {
                const type = itemData.type
                const equipped = itemData.equipped

                if (equipped || this.displayUnequipped) {
                    const typeMap = gearMap.get(type) ?? new Map()
                    typeMap.set(itemId, itemData)
                    gearMap.set(type, typeMap)
                }
            }

            for (const [type, typeMap] of gearMap) {
                const groupId = GEAR_TYPE[type]?.groupId

                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                // Get actions
                const actions = [...typeMap].map(([itemId, itemData]) => {
                    const id = itemId
                    const name = itemData.name
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)

                    return {
                        id,
                        name,
                        listName,
                        encodedValue
                    }
                })

                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
        }

        /**
         * Build skills
         * @private
         */
        async #buildSkills() {
            // Exit if no items exist
            if (this.items.size === 0) return

            const actionTypeId = 'skill'
            const skillMap = new Map()

            for (const [itemId, itemData] of this.items) {
                const type = itemData.type

                if (type === 'skill') {
                    const category = itemData.system.category
                    const categoryMap = skillMap.get(category) ?? new Map()
                    categoryMap.set(itemId, itemData)
                    skillMap.set(category, categoryMap)
                }
            }

            for (const [category, categoryMap] of skillMap) {
                const groupId = SKILL_TYPE[category]?.groupId

                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                // Get actions
                const actions = [...categoryMap].map(([itemId, itemData]) => {
                    const id = itemId
                    const name = itemData.name
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)

                    return {
                        id,
                        name,
                        listName,
                        encodedValue
                    }
                })

                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
        }

        /**
         * Build stats
         * @private
         */
        async #buildStats() {

            const actionTypeId = 'stat'
            const stats = Object.entries(this.actor.system.stats)
            const statMap = new Map()

            for (const [itemId, itemData] of stats) {
                const category = STAT_TYPE[itemId]?.groupId
                const categoryMap = statMap.get(category) ?? new Map()
                categoryMap.set(itemId, itemData)
                statMap.set(category, categoryMap)
            }

            for (const [category, categoryMap] of statMap) {
                const groupId = category

                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                // Get actions
                const actions = [...categoryMap].map(([itemId, itemData]) => {
                    const id = itemId
                    const name = STAT_TYPE[itemId]?.name
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)

                    return {
                        id,
                        name,
                        listName,
                        encodedValue
                    }
                })

                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
        }
    }
})
