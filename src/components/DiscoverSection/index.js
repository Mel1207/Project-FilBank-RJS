import React from 'react'
import { 
    HeaderTitle,
    Headh1 
} from './DiscoverElement'

const DiscoverSection = ({
    id, title
}) => {
    return (
        <>
            <HeaderTitle id={id}>
                <Headh1>{title}</Headh1>
            </HeaderTitle>
        </>
    )
}

export default DiscoverSection
