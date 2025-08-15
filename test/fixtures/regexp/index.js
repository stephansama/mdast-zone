import {zone} from 'mdast-zone'

/** @param {import('mdast').Root} tree */
export default function assertion(tree) {
  zone(tree, /.*foo.*/, function (start, _, end) {
    return [
      start,
      {
        type: 'paragraph',
        depth: 2,
        children: [{type: 'text', value: 'changed'}]
      },
      end
    ]
  })
}
