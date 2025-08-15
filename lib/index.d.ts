/**
 * Search `tree` for a start and end comments matching `name` and change their
 * “section” with `handler`.
 *
 * @param {Nodes} node
 *   Tree to search.
 * @param {string | RegExp} name
 *   Comment name to look for.
 * @param {Handler} handler
 *   Handle a section.
 * @returns {undefined}
 *   Nothing.
 */
export function zone(node: Nodes, name: string | RegExp, handler: Handler): undefined;
/**
 * Extra info.
 */
export type Info = {
    /**
     *   Parent of the section.
     */
    parent: Parents;
    /**
     *   Index of `start` in `parent`.
     */
    start: number;
    /**
     *   Index of `end` in `parent`.
     */
    end: number;
};
/**
 * Callback called when a section is found.
 */
export type Handler = (start: Nodes, between: Array<Nodes>, end: Nodes, info: Info) => Array<Nodes | null | undefined> | null | undefined | void;
import type { Nodes } from 'mdast';
import type { Parents } from 'mdast';
