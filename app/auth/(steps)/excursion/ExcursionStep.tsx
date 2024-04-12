'use client';

import { FirstScreen } from './components/FirstScreen/FirstScreen';
import { FourthScreen } from './components/FourthScreen/FourthScreen';
import { SecondScreen } from './components/SecondScreen/SecondScreen';
import { ThirdScreen } from './components/ThirdScreen/ThirdScreen';
import { useExcursionStep } from './hooks/useExcursionStep';

export const ExcursionStep = () => {
  const { state, functions } = useExcursionStep();

  return (
    <>
      {state.screen === 'first' && (
        <FirstScreen
          onNextClick={() => functions.setScreen('second')}
          onSkipClick={functions.goToRegister}
        />
      )}
      {state.screen === 'second' && (
        <SecondScreen
          onNextClick={() => functions.setScreen('third')}
          onSkipClick={functions.goToRegister}
        />
      )}
      {state.screen === 'third' && (
        <ThirdScreen
          onNextClick={() => functions.setScreen('fourth')}
          onSkipClick={functions.goToRegister}
        />
      )}
      {state.screen === 'fourth' && <FourthScreen onContinueClick={functions.goToRegister} />}
    </>
  );
};
