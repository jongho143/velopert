import React from 'react'

const MyNickname = ({ name }) => {
    return(
        <div>
            안녕하세요 저는 {name}입니다.
        </div>
    )
};

MyNickname.defaultProps = {
    name:'JONGHOLEE'
}

export default MyNickname;