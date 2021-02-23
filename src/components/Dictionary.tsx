import List from 'antd/lib/list';
import Search from 'antd/lib/input/Search';
import Row from 'antd/lib/row';
import React, { useEffect, useState } from 'react';
import { Col } from 'antd/lib/grid';

interface API_CONFIG {
    apiKey: string;
    type: "learners" | "sd3";
}
const API_CONFIG: API_CONFIG = {
    apiKey: "09c87581-174b-456e-9867-97c319d5b55e",
    type: "learners"
}

const Dictionary = () => {
    const [data, setData] = useState<any[]>([]);
    const [word, setWord] = useState<string>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [data])

    const onSearchWord = async (value: string) => {
        setWord(value)
        setLoading(true)

        const result = await (await fetch(`https://www.dictionaryapi.com/api/v3/references/${API_CONFIG.type}/json/${value}?key=${API_CONFIG.apiKey}`)).json()
        setData(
            result
                .filter((r: any) => r.fl !== undefined && r.def !== undefined)
                .map((r: any) => ({ fl: r.fl, def: r.shortdef }))
        )
        setLoading(false)
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
                        size="large"
                        itemLayout="vertical"
                        dataSource={data}
                        bordered
                        header={word}
                        loading={{ size: "large", spinning: loading }}
                        renderItem={item => <MeanList definations={item} />} />
                </Col>
            </Row>
        </>
    )
}

interface MeanListProps {
    definations: {
        fl: string;
        def: string[];
    }
}

const MeanList: React.FC<MeanListProps> = (props) => {
    return <List.Item>
        <List.Item.Meta title={props.definations.fl} />
        <ul>
            {props.definations.def.map(d => (
                <>
                    <li>{d}</li>
                </>
            ))}
        </ul>
    </List.Item>
}



export default Dictionary;