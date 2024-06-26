import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { SwipeableCardRefType } from '../components/Card';

const useSwipeControls = (numberOfItems: number) => {
    const activeIndex = useSharedValue(0);

    const refs = useMemo(() => {
        let pendingRefs = [];
        for (let i = 0; i < numberOfItems; i++) {
            pendingRefs.push(React.createRef<SwipeableCardRefType>());
        }
        return pendingRefs;
    }, [numberOfItems]);

    const swipeRight = useCallback(() => {
        // check if current ref exists
        if (!refs[activeIndex.value]) {
            return;
        }
        refs[activeIndex.value].current?.swipeRight();
    }, [activeIndex.value, refs]);

    const swipeLeft = useCallback(() => {
        // check if current ref exists
        if (!refs[activeIndex.value]) {
            return;
        }
        refs[activeIndex.value].current?.swipeLeft();
    }, [activeIndex.value, refs]);

    const timeouts = useRef<NodeJS.Timeout[]>([]);

    const reset = useCallback(() => {
        // reset all cards in the opposite direction with a delay
        refs.forEach((ref, index) => {
            timeouts.current.push(
                setTimeout(() => {
                    ref.current?.reset();
                }, index * 100)
            );
        });
    }, [activeIndex.value, refs]);

    useEffect(() => {
        return () => {
            timeouts.current.forEach((timeout) => {
                clearTimeout(timeout);
            });
        };
    }, []);

    return {
        activeIndex,
        refs,
        swipeRight,
        swipeLeft,
        reset,
    };
};

export { useSwipeControls };
