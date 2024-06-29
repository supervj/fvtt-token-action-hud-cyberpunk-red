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
export const GEAR_TYPE = {
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
    awarenessSkills: { groupId: 'awareness-skills' },
    bodySkills: { groupId: 'body-skills' },
    controlSkills: { groupId: 'control-skills' },
    educationSkills: { groupId: 'education-skills' },
    fightingSkills: { groupId: 'fighting-skills' },
    performanceSkills: { groupId: 'performance-skills' },
    rangedweaponSkills: { groupId: 'ranged-weapon-skills' },
    socialSkills: { groupId: 'social-skills' },
    techniqueSkills: { groupId: 'technique-skills' }
}

/**
 * Stat types
 */
export const STAT_TYPE = {
    body: { groupId: 'physical-stats', name: 'Body' },
    cool: { groupId: 'mental-stats', name: 'Cool' },
    dex: { groupId: 'physical-stats', name: 'Dexterity' },
    emp: { groupId: 'mental-stats', name: 'Empathy' },
    int: { groupId: 'mental-stats', name: 'Intelligence' },
    luck: { groupId: 'fortune-stats', name: 'Luck' },
    move: { groupId: 'physical-stats', name: 'Movement' },
    ref: { groupId: 'combat-stats', name: 'Reflexes' },
    tech: { groupId: 'combat-stats', name: 'Technique' },
    will: { groupId: 'mental-stats', name: 'Willpower' },
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
    combatStats: { id: 'combat-stats', name: 'Combat Stats', type: 'system' },
    conditions: { id: 'conditions', name: 'Conditions', type: 'system' },
    controlSkills: { id: 'control-skills', name: 'Control Skills', type: 'system' },
    cyberdecks: { id: 'cyberdecks', name: 'Cyberdecks', type: 'system' },
    cyberware: { id: 'cyberware', name: 'Cyberware', type: 'system' },
    drugs: { id: 'drugs', name: 'Drugs', type: 'system' },
    educationSkills: { id: 'education-skills', name: 'Education Skills', type: 'system' },
    fightingSkills: { id: 'fighting-skills', name: 'Fighting Skills', type: 'system' },
    fortuneStats: { id: 'fortune-stats', name: 'Fortune Stats', type: 'system' },
    gear: { id: 'gear', name: 'Gear', type: 'system' },
    mentalStats: { id: 'mental-stats', name: 'Mental Stats', type: 'system' },
    passiveEffects: { id: 'passive-effects', name: 'Passive Effects', type: 'system' },
    performanceSkills: { id: 'performance-skills', name: 'Performance Skills', type: 'system' },
    physicalStats: { id: 'physical-stats', name: 'Physical Stats', type: 'system' },
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

