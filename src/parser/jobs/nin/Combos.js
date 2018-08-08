import ACTIONS from 'data/ACTIONS'
import CoreCombos from 'parser/core/modules/Combos'

export default class Combos extends CoreCombos {
	// Overrides
	static suggestionIcon = ACTIONS.SPINNING_EDGE.icon

	comboHit(/*event*/) {
		// One day, this will be used for Huton tracking. But today is not that day.
	}
}