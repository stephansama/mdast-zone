/**
 * @import {Root} from 'mdast'
 */

import {zone} from '@stephansama/mdast-zone'

/**
 * @param {Root} tree
 */
export default function assertion(tree) {
  zone(tree, 'foo', function (start, _, end) {
    return [start, end]
  })
}
