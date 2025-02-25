import Item from 'common/ITEMS/Item';

const trinkets = {
  SPOILS_OF_NELTHARUS: {
    id: 193773,
    name: 'Spoils of Neltharus',
    icon: 'inv_10_dungeonjewelry_dragon_trinket_4_bronze',
  },
  VESSEL_OF_SEARING_SHADOW: {
    id: 202615,
    name: 'Vessel of Searing Shadow',
    icon: 'inv_trinket_mawraid_01_purple',
  },
} satisfies Record<string, Item>;

export default trinkets;
