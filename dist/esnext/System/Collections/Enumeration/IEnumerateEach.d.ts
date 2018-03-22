/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
import { ActionWithIndex, PredicateWithIndex } from "../../FunctionTypes";
export default interface IEnumerateEach<T> {
    /**
     * If the action returns false, the enumeration will stop.
     * @param action
     * @param useCopy
     */
    forEach(action: ActionWithIndex<T>, useCopy?: boolean): number;
    forEach(action: PredicateWithIndex<T>, useCopy?: boolean): number;
}
