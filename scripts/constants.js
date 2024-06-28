/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-cyberpunk-red'
}

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '1.5'

/**
 * Action types
 */
export const ACTION_TYPE = {
    action: 'CPR.global.generic.actions',
    stat: 'Stats',
    initiative: 'Initiative',
    item: 'Item',
    skill: 'Skill',
    strike: 'Strike',
    strikeAuxiliaryAction: 'Strike Aux Action',
    toggle: 'Toggle',
    utility: 'tokenActionHud.utility'
}

/**
 * Carry types icons
 */
export const CARRY_TYPE_ICON = {
    owned: {
        icon: '<i class="fas fa-circle-notch text-left" data-tooltip="placeholder"></i>',
        tooltip: 'CPR.global.equipState.owned'
    },
    carried: {
        icon: '<i class="fas fa-suitcase text-left" data-tooltip="placeholder"></i>',
        tooltip: 'CPR.global.equipState.carried'
    },
    equipped: {
        icon: '<i class="fas fa-hand-paper text-left" data-tooltip="placeholder"></i>',
        tooltip: 'CPR.global.equipState.equipped'
    }
}
/**
 * Item types
 */
export const ITEM_TYPE = {
    ammo: { groupId: 'ammo' },
    armor: { groupId: 'armor' },
    clothing: { groupId: 'clothing' },
    cyberdeck: { groupId: 'cyberdecks' },
    cyberware: { groupId: 'cyberware' },
    drug: { groupId: 'drugs' },
    gear: { groupId: 'gear' },
    itemUpgrade: { groupId: 'upgrades' },
    program: { groupId: 'programs' },
    vehicle: { groupId: 'vehicles' },
    weapon: { groupId: 'weapons' }
}

/**
 * Skill types
 */
export const SKILL_TYPE = {
    awarenessSkills: { groupId: 'awarenessSkills' },
    bodySkills: { groupId: 'bodySkills' },
    controlSkills: { groupId: 'controlSkills' },
    educationSkills: { groupId: 'educationSkills' },
    fightingSkills: { groupId: 'fightingSkills' },
    performanceSkills: { groupId: 'performanceSkills' },
    rangedweaponSkills: { groupId: 'rangedWeaponSkills' },
    socialSkills: { groupId: 'socialSkills' },
    techniqueSkills: { groupId: 'techniqueSkills' }
}


/**
 * Groups
 */
export const GROUP = {
    ammo: { id: 'ammo', name: 'Ammo', type: 'system' },
    armor: { id: 'armor', name: 'Armor', type: 'system' },
    awarenessSkills: { id: 'awareness-skills', name: 'Awareness Skills', type: 'system' },
    bodySkills: { id: 'body-skills', name: 'Body Skills', type: 'system' },
    clothing: { id: 'clothing', name: 'Clothing', type: 'system' },
    conditions: { id: 'conditions', name: 'Conditions', type: 'system' },
    controlSkills: { id: 'control-skills', name: 'Control Skills', type: 'system' },
    cyberware: { id: 'cyberware', name: 'Cyberware', type: 'system' },
    cyberdecks: { id: 'cyberdecks', name: 'Cyberdecks', type: 'system' },
    drugs: { id: 'drugs', name: 'Drugs', type: 'system' },
    educationSkills: { id: 'education-skills', name: 'Education Skills', type: 'system' },
    fightingSkills: { id: 'fighting-skills', name: 'Fighting Skills', type: 'system' },
    gear: { id: 'gear', name: 'Gear', type: 'system' },
    passiveEffects: { id: 'passive-effects', name: 'Passive Effects', type: 'system' },
    performanceSkills: { id: 'performance-skills', name: 'Performance Skills', type: 'system' },
    programs: { id: 'programs', name: 'Programs', type: 'system' },
    rangedWeaponSkills: { id: 'ranged-weapon-skills', name: 'Ranged Weapon Skills', type: 'system' },
    roles: { id: 'roles', name: 'Roles', type: 'system' },
    socialSkills: { id: 'social-skills', name: 'Social Skills', type: 'system' },
    stats: { id: 'stats', name: 'Stats', type: 'system' },
    techniqueSkills: { id: 'technique-skills', name: 'Technique Skills', type: 'system' },
    temporaryEffects: { id: 'temporary-effects', name: 'Temporary Effects', type: 'system' },
    upgrades: { id: 'upgrades', name: 'Upgrades', type: 'system' },
    utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' },
    vehicles: { id: 'vehicles', name: 'Vehicles', type: 'system' },
    weapons: { id: 'weapons', name: 'Weapons', type: 'system' }
}

