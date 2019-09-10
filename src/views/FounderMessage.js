/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class FounderMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><h4>रॉयल कृष्णा हेल्पिंग सोसायटी</h4></ModalHeader>
                    <ModalBody>
                        रॉयल कृष्णा हेल्पिंग सोसायटी वेबसाइट में आपका स्वागत है, और समय निकालने के लिए धन्यवाद और हम क्या करते हैं और क्या कर रहे हैं, इसके बारे में अधिक जानकारी प्राप्त करते हैं। हम आशा करते हैं कि यह साइट आपको यह जानने और जानने का मौका देगी कि हम कौन हैं, हम क्या करते हैं, और हमारे भविष्य में हमारे समाज में सामाजिक परिवर्तन की योजना है। हमें उम्मीद है कि आप हमारी वेबसाइट को रोचक और जानकारीपूर्ण पाएंगे, और मैं आपसे सुनने के लिए उत्सुक हूं।
              
                        हम अपने देश के बारे में गंभीर रूप से चिंतित थे और सोच रहे थे कि हम किस दिशा में जा रहे हैं। अपने दिमाग में यह सब लेने के लिए, हमने इस सोसाइटी की शुरुआत की और सामाजिक मुद्दों पर आम सहमति बनाने की कोशिश की और समाज में किसी भी व्यक्ति, वर्ग, समुदाय के खिलाफ शोषण, अन्याय और भ्रष्टाचार के खिलाफ लड़ाई की योजना बनाई क्योंकि सभी समुदायों के लिए समान अधिकार हमारा उद्देश्य है ”।
                        
                        हमारा दृढ़ विश्वास है कि हम अपने समाज के लिए भविष्य का निर्माण नहीं कर सकते हैं, लेकिन हम भविष्य के लिए अपने समाज का निर्माण कर सकते हैं।
                        
                        (समाज की सेवा करने के लिए समाज के बीच जाना पड़ेगा
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Donate Now</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default FounderMessage;