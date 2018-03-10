import React from 'react'
import loremIpsum from 'lorem-ipsum'
/**
 * COMPONENT
 */

const testPage = () => (
    <div>
        <p>
            {loremIpsum({
                count: 21,
            units: 'paragraph',
            sentenceLowerBound: 5,
            sentenceUpperBound: 15,
            paragraphLowerBound: 10,
            paragraphUpperBound: 15,
            format: 'plain',
            random: Math.random,
            suffix: '\n'
            })}
        </p>
    </div>
)

export default testPage
