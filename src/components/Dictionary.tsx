import List from 'antd/lib/list';
import Search from 'antd/lib/input/Search';
import Row from 'antd/lib/row';
import React, { useEffect, useState } from 'react';
import { Col } from 'antd/lib/grid';

const API_CONFIG = {
    apiKey: "09c87581-174b-456e-9867-97c319d5b55e"
}

const Dictionary = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        console.log(data);
    }, [data])

    const onSearchWord = async (value: string) => {
        const word = value;
        const result = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${API_CONFIG.apiKey}`)
        setData(await result.json());
    }

    return (
        <>
            <Row className="SearchRow">
                <Col span={24}>
                    <Search placeholder="Search a word" onSearch={onSearchWord} enterButton />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <List
                        dataSource={data}
                        bordered
                        renderItem={item => {
                            return <List.Item>{ item.shortdef[0] }</List.Item>
                        }} />
                </Col>
            </Row>
        </>
    )
}




export default Dictionary;