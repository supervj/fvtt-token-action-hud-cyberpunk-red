import { GROUP } from './constants.js'

/**
 * Default layout and groups
 */
export let DEFAULTS = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    const groups = GROUP
    Object.values(groups).forEach(group => {
        group.name = coreModule.api.Utils.i18n(group.name)
        group.listName = `Group: ${coreModule.api.Utils.i18n(group.listName ?? group.name)}`
    })
    const groupsArray = Object.values(groups)
    DEFAULTS = {
        layout: [
            {
                nestId: 'gear',
                id: 'gear',
                name: coreModule.api.Utils.i18n('Gear'),
                groups: [
                    { ...groups.weapons, nestId: 'gear_weapons' },
                    { ...groups.ammo, nestId: 'gear_ammo' },
                    { ...groups.armor, nestId: 'gear_armor' },
                    { ...groups.cyberware, nestId: 'gear_cyberware' },
                    { ...groups.drugs, nestId: 'gear_drugs' },
                    { ...groups.gear, nestId: 'gear_gear' },
                    { ...groups.clothing, nestId: 'gear_clothing' },
                    { ...groups.vehicles, nestId: 'gear_vehicles' },
                    { ...groups.cyberdecks, nestId: 'gear_cyberdecks' },
                    { ...groups.programs, nestId: 'gear_programs' },
                    { ...groups.upgrades, nestId: 'gear_upgrades' }
                ]
            },
            {
                nestId: 'stats',
                id: 'stats',
                name: coreModule.api.Utils.i18n('Stats'),
                groups: [
                    { ...groups.mentalStats, nestId: 'stats_mental-stats' },
                    { ...groups.combatStats, nestId: 'stats_combat-stats' },
                    { ...groups.fortuneStats, nestId: 'stats_fortune-stats' },
                    { ...groups.physicalStats, nestId: 'stats_physical-stats' }
                ]
            },
            {
                nestId: 'roles',
                id: 'roles',
                name: coreModule.api.Utils.i18n('Roles'),
                groups: [
                    { ...groups.roles, nestId: 'roles_roles' }
                ]
            },
            {
                nestId: 'skills',
                id: 'skills',
                name: coreModule.api.Utils.i18n('Skills'),
                groups: [
                    { ...groups.awarenessSkills, nestId: 'skills_awareness-skills' },
                    { ...groups.bodySkills, nestId: 'skills_body-skills' },
                    { ...groups.controlSkills, nestId: 'skills_control-skills' },
                    { ...groups.educationSkills, nestId: 'skills_education-skills' },
                    { ...groups.fightingSkills, nestId: 'skills_fighting-skills' },
                    { ...groups.performanceSkills, nestId: 'skills_performance-skills' },
                    { ...groups.rangedWeaponSkills, nestId: 'skills_ranged-weapon-skills' },
                    { ...groups.socialSkills, nestId: 'skills_social-skills' },
                    { ...groups.techniqueSkills, nestId: 'skills_technique-skills' }
                ]
            },
            {
                nestId: 'effects',
                id: 'effects',
                name: coreModule.api.Utils.i18n('DND5E.Effects'),
                groups: [
                    { ...groups.temporaryEffects, nestId: 'effects_temporary-effects' },
                    { ...groups.passiveEffects, nestId: 'effects_passive-effects' },
                    { ...groups.conditions, nestId: 'effects_conditions' }
                ]
            },
            {
                nestId: 'utility',
                id: 'utility',
                name: coreModule.api.Utils.i18n('tokenActionHud.utility'),
                groups: [
                    { ...groups.combat, nestId: 'utility_combat' },
                    { ...groups.token, nestId: 'utility_token' },
                    { ...groups.rests, nestId: 'utility_rests' },
                    { ...groups.utility, nestId: 'utility_utility' }
                ]
            }
        ],
        groups: groupsArray
    }
})
