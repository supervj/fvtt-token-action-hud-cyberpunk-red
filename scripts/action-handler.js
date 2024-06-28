// System Module Imports
import { ACTION_TYPE, CARRY_TYPE_ICON, ITEM_TYPE } from './constants.js'
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
            this.#buildInventory()
        }

        /**
         * Build multiple token actions
         * @private
         * @returns {object}
         */
        #buildMultipleTokenActions() {
        }

        /**
         * Build inventory
         * @private
         */
        async #buildInventory() {
            // Exit if no items exist
            if (this.items.size === 0) return

            const actionTypeId = 'item'
            const inventoryMap = new Map()

            for (const [itemId, itemData] of this.items) {
                const type = itemData.type
                const equipped = itemData.equipped

                if (equipped || this.displayUnequipped) {
                    const typeMap = inventoryMap.get(type) ?? new Map()
                    typeMap.set(itemId, itemData)
                    inventoryMap.set(type, typeMap)
                }
            }

            for (const [type, typeMap] of inventoryMap) {
                const groupId = ITEM_TYPE[type]?.groupId

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
        async #buildskills() {
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
                    skillMap.set(type, categoryMap)
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
        async #buildstats() {

            const stats = this.actor.system.stats

            // Exit if no stats exist
            if (stats.length === 0) return

            // Get actions
            const actions = Object.entries(stats)
                .filter((stat) => stats[stat[0]].value !== 0)
                .map(([statId, stat]) => {
                    const id = `${actionType}-${statId}`
                    const abbreviatedName = abilityId.charAt(0).toUpperCase() + abilityId.slice(1)
                    const label = this.systemVersion >= '2.2' ? CONFIG.DND5E.stats[abilityId].label : CONFIG.DND5E.stats[abilityId]
                    const name = this.abbreviateSkills ? abbreviatedName : label
                    // Localise
                    const actionTypeName = `${coreModule.api.Utils.i18n(ACTION_TYPE[actionType])}: ` ?? ''
                    const listName = `${actionTypeName}${label}`
                    const encodedValue = [actionType, abilityId].join(this.delimiter)
                    const icon1 = (groupId !== 'checks') ? this.#getProficiencyIcon(stats[abilityId].proficient) : ''
                    const mod = (groupId !== 'saves') ? ability?.mod : ((groupId === 'saves') ? ability?.save : '')
                    const info1 = (this.actor) ? { text: coreModule.api.Utils.getModifier(mod) } : null
                    const info2 = (this.actor && groupId === 'stats') ? { text: `(${coreModule.api.Utils.getModifier(ability?.save)})` } : null
                    return {
                        id,
                        name,
                        encodedValue,
                        icon1,
                        info1,
                        info2,
                        listName
                    }
                })

            // Create group data
            const groupData = { id: groupId, type: 'system' }

            // Add actions to action list
            this.addActions(actions, groupData)
        }
    }
})
