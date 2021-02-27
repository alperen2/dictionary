import List from 'antd/lib/list';
import Search from 'antd/lib/input/Search';
import Row from 'antd/lib/row';
import React, { useEffect, useState } from 'react';
import { Col } from 'antd/lib/grid';
import Empty from 'antd/lib/empty';
import { log } from 'console';

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
            headers: {
                'app_id': 'd9059350',
                'app_key': 'd50dec262ee85fd0c4462fef816cf94b',
                'Access-Control-Allow-Origin': '*'

            },
        })
            .then(e => e.json())
            .then(async result => {
                console.log('====================================');
                console.log(result);
                console.log('====================================');
            })
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