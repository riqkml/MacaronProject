import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Button from './Button';

// import styles from './style';

// import type { Step } from '../types';

// type Props = {
//   isFirstStep: boolean,
//   isLastStep: boolean,
//   handleNext: func,
//   handlePrev: func,
//   handleStop: func,
//   currentStep: Step,
//   labels: Object,
// };

const TooltipComponent = ({
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
    handleStop,
    currentStep,
    labels
}) => (
    <>
        <View style={{ backgroundColor: 'red' }}>
            <View style={styles.tooltipContainer}>
                <Image
                    source={{ uri: 'https://pbs.twimg.com/profile_images/527584017189982208/l3wwN-l-_400x400.jpeg' }}
                    style={{ width: 60, height: 60 }}
                />
                <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
            </View>

        </View>
        <View style={[styles.bottomBar]}>
            {
                !isLastStep ?
                    <TouchableOpacity onPress={handleStop}>
                        <Button>{labels.skip || 'Skip'}</Button>
                    </TouchableOpacity>
                    : null
            }
            {
                !isFirstStep ?
                    <TouchableOpacity onPress={handlePrev}>
                        <Button>{labels.previous || 'Previous'}</Button>
                    </TouchableOpacity>
                    : null
            }
            {
                !isLastStep ?
                    <TouchableOpacity onPress={handleNext}>
                        <Button>{labels.next || 'awe'}</Button>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={handleStop}>
                        <Button>{labels.finish || 'Finish'}</Button>
                    </TouchableOpacity>
            }
        </View>
    </>
);

export default TooltipComponent;


const styles = StyleSheet.create({
    tooltipText: {

    },
    tooltipContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomBar: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
})
