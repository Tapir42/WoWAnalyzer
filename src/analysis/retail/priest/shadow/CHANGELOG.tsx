import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/priest';
import { DoxAshe, Havoc, ToppleTheNun } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';

export default [
  change(date(2023, 7, 26), <>Update suggestions for spell usage in guide view for 10.1.5</>,DoxAshe),
  change(date(2023, 7, 3), 'Update SpellLink usage.', ToppleTheNun),
  change(date(2023, 6, 29), <>Add <SpellLink spell={TALENTS.VOID_TORRENT_TALENT}/>, <SpellLink spell={SPELLS.MIND_FLAY}/>, and <SpellLink spell={SPELLS.MIND_FLAY_INSANITY_TALENT_DAMAGE}/> to channeled spells to fix downtime and timeline</>,DoxAshe),
  change(date(2023, 6, 27), <>Add <SpellLink spell={TALENTS.SHADOWFIEND_TALENT}/> cooldown tracking to guide view</>,DoxAshe),
  change(date(2023, 6, 22), <>Track <SpellLink spell={SPELLS.VOIDFORM}/> duration extension</>,DoxAshe),
  change(date(2023, 6, 7), <>Fix <SpellLink spell={SPELLS.VOID_BOLT}/> cooldown tracking</>,DoxAshe),
  change(date(2023, 5, 29), <>Added <SpellLink spell={TALENTS.MANIPULATION_TALENT}/> cooldown reduction</>,DoxAshe),
  change(date(2023, 5, 24), <>Added <SpellLink spell={TALENTS.INSIDIOUS_IRE_TALENT}/> efficiency and damage</>,Havoc),
  change(date(2023, 5, 20), <>Updated <SpellLink spell={TALENTS.VOID_TORRENT_TALENT}/> insanity waste</>,DoxAshe),
  change(date(2023, 5, 9), <>Fixed <SpellLink spell={TALENTS.AUSPICIOUS_SPIRITS_TALENT}/>,  <SpellLink spell={TALENTS.DEATH_AND_MADNESS_TALENT}/>, <SpellLink spell={TALENTS.DEATHSPEAKER_TALENT}/>,  <SpellLink spell={TALENTS.SHADOWY_INSIGHT_TALENT}/>,  <SpellLink spell={TALENTS.IDOL_OF_CTHUN_TALENT}/>, and <SpellLink spell={TALENTS.IDOL_OF_YOGG_SARON_TALENT}/> </>,DoxAshe),
  change(date(2023, 5, 4), <>Added <SpellLink spell={TALENTS.SURGE_OF_INSANITY_TALENT}/></>,DoxAshe),
  change(date(2023, 5, 3), <>Updated Shadow Priest Talents and Abilites for 10.1</>,DoxAshe),
  change(date(2023, 4, 21), <>Increased the accuracy of <SpellLink spell={SPELLS.VOID_BOLT}/> cooldown tracking</>,DoxAshe),
  change(date(2023, 2, 15), <>Added additional information to cooldowns in guide view</>,DoxAshe),
  change(date(2023, 2, 10), <>Track <SpellLink spell={TALENTS.SHADOW_CRASH_TALENT}/> when cast prepull</>,DoxAshe),
  change(date(2023, 2, 8), <>Added Mind Sear Talent and <SpellLink spell={SPELLS.VOID_BOLT}/> to guide and removed <SpellLink spell={TALENTS.SHADOW_WORD_DEATH_TALENT}/> suggestions</>,DoxAshe),
  change(date(2023, 1, 23), <>Added statistic for T29 four piece and fixed <SpellLink spell={SPELLS.MIND_BLAST}/> maximum casts with <SpellLink spell={TALENTS.SHADOWY_INSIGHT_TALENT}/> talented</>,DoxAshe),
  change(date(2023, 1, 8), <>Setup an initial version of Guide </>,DoxAshe),
  change(date(2022, 12, 29), <>Created statistics for <SpellLink spell={TALENTS.IDOL_OF_CTHUN_TALENT}/>, <SpellLink spell={TALENTS.IDOL_OF_NZOTH_TALENT}/>, <SpellLink spell={TALENTS.IDOL_OF_YOGG_SARON_TALENT}/>, and <SpellLink spell={TALENTS.IDOL_OF_YSHAARJ_TALENT}/> </>,DoxAshe),
  change(date(2022, 12, 20), <>Added Mind Flay Insanity Talent to proc checklist</>,DoxAshe),
  change(date(2022, 12, 12), <>Improved tracking of buffs in timelines and added <SpellLink spell={TALENTS.DARK_ASCENSION_TALENT}/> and <SpellLink spell={SPELLS.VOIDFORM}/> to tracked cooldowns</>,DoxAshe),
  change(date(2022, 12, 7), <>Fixed error with <SpellLink spell={TALENTS.DARK_EVANGELISM_TALENT}/> if the buff exists prepull</>,DoxAshe),
  change(date(2022, 11, 29), <>Improved proc checklist section and fixed some missing icons for the procs </>,DoxAshe),
  change(date(2022, 11, 24), <>Added checklist section and suggestions for using procs </>,DoxAshe),
  change(date(2022, 11, 15), <>Added support for new Dragonflight talents</>,DoxAshe),
  change(date(2022, 11, 6), <>Updated spells and talents for Dragonflight</>,DoxAshe),
];
