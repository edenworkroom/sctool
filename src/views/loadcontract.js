import React, {Component} from 'react';
import LoadForm from "../component/loadform";
import {Flex} from "antd-mobile";

export class LoadContract extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: document.documentElement.clientHeight}}>
                <LoadForm/>
                <div style={{padding: '0 15px'}}>
                    <p>开发者：eden
                        <br/>如对您有用，可以打赏，多谢您的支持。
                        <br/> 如有问题请联系开发者。
                    </p>
                    <Flex>
                        <Flex.Item>
                            <img src="wc.jpeg" width="150" height="150"></img>
                            <p style={{textAlign: "center"}}>微信号</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src="address.jpeg" width="150" height="150"></img>
                            <p style={{textAlign: "center"}}>收款码</p>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}