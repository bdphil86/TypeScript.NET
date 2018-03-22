/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { PromiseCollection } from "../PromiseCollection";
/**
 * Takes a set of values or promises and returns a PromiseCollection.
 * Similar to 'group' but calls resolve on each entry.
 * @param resolutions
 */
declare function resolveAll<T>(resolutions: Array<T | PromiseLike<T>>): PromiseCollection<T>;
declare function resolveAll<T>(promise: T | PromiseLike<T>, ...rest: Array<T | PromiseLike<T>>): PromiseCollection<T>;
export default resolveAll;
