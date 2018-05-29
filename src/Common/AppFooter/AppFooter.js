import React, {
    Component
} from 'react';
import {
    Text
} from 'react-native';
import {
    Footer,
    FooterTab,
    Button,
    Icon
} from 'native-base';


export default class AppFooter extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button onPress={()=>{}}>
                            <Icon active name="egg"/>
                            <Text>Feed</Text>
                        </Button>
                        <Button onPress={()=>{}}>
                            <Icon name="paper"/>
                            <Text>News</Text>
                        </Button>
                        <Button onPress={()=>{}}>
                            <Icon name="person"/>
                            <Text>Me</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )

    }
}