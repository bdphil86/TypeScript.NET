/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Executor } from "../PromiseTypes";
import PromiseBase from "../PromiseBase";
/**
 * Syntactic shortcut for avoiding 'new'.
 * @param resolver
 * @param forceSynchronous
 * @returns {TSDNPromise}
 */
export default function using<T>(resolver: Executor<T>, forceSynchronous?: boolean): PromiseBase<T>;
