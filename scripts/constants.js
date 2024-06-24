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
    attribute: 'Attributes',
    initiative: 'Initiative',
    item: 'Item',
    skill: 'Skill',
    skillAction: 'Skill Action',
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
    armor: { groupId: 'armor' },
    consumable: { groupId: 'consumables' },
    equipment: { groupId: 'equipment' },
    treasure: { groupId: 'treasure' },
    weapon: { groupId: 'weapons' }
}

/**
 * Groups
 */
export const GROUP = {
    attack: { id: 'attack', name: 'Attacks', type: 'system' },
    toggles: { id: 'toggles', name: 'Toggles', type: 'system' },
    strikes: { id: 'strikes', name: 'Strikes', type: 'system' },
    actions: { id: 'actions', name: 'Actions', type: 'system' },
    armor: { id: 'armor', name: 'Armor', type: 'system' },
    equipment: { id: 'equipment', name: 'Equipment', type: 'system' },
    consumables: { id: 'consumables', name: 'Consumables', type: 'system' },
    treasure: { id: 'treasure', name: 'Treasure', type: 'system' },
    roleAbility: { id: 'roleAbility', name: 'Role Abilities', type: 'system' },
    skills: { id: 'skills', name: 'Skills', type: 'system' },
    weapons: { id: 'weapons', name: 'Weapons', type: 'system' },
    combat: { id: 'combat', name: 'Combat', type: 'system' },
    token: { id: 'token', name: 'Token', type: 'system' },
    utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' }
}

