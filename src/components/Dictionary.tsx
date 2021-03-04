import List from 'antd/lib/list';
import Search from 'antd/lib/input/Search';
import Row from 'antd/lib/row';
import React, { useEffect, useState } from 'react';
import { Col } from 'antd/lib/grid';

interface API_CONFIG {
    app_id: string;
    app_key: string;
    language: string;
}
const API_CONFIG: API_CONFIG = {
    app_id: "d9059350",
    app_key: "d50dec262ee85fd0c4462fef816cf94b",
    language: "en-gb",
}

const Dictionary = () => {
    const [data, setData] = useState<any[]>([]);
    const [word, setWord] = useState<string>();
    const [loading, setLoading] = useState(false);




    useEffect(() => {
        console.log(data);
    }, [data])

    const onSearchWord = async (value: string) => {
        if (value.length == 0) return false;
        setWord(value)
        setLoading(true)
        await fetch(`https://od-api.oxforddictionaries.com:443/api/v2/entries/${API_CONFIG.language}/${value.toLocaleLowerCase()}`, {
            method: "get",
            headers: {
                'app_id': API_CONFIG.app_id,
                'app_key': API_CONFIG.app_key,
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));


    }
    return (
        <>
            <Row className="SearchRow">
                <Col span={24}>
                    <Search placeholder="Search a word" onSearch={onSearchWord} allowClear enterButton />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                </Col>
            </Row>
        </>
    )
}




export default Dictionary;