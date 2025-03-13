import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import { newTimer } from './utils/TimerUtils';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [timers, setTimers] = useState([
    {
      title: 'Worker management',
      project: 'Safety Construction',
      id: uuidv4(),
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: 'Bake Squash',
      project: 'Kitchen chores',
      id: uuidv4(),
      elapsed: 1273998,
      isRunning: false,
    },
  ]);

  useEffect(() => {
    const TIME_INTERVAL = 1000;
    const intervalId = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => ({
          ...timer,
          elapsed: timer.isRunning ? timer.elapsed + TIME_INTERVAL : timer.elapsed,
        }))
      );
    }, TIME_INTERVAL);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const handleFormSubmit = (attrs) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === attrs.id ? { ...timer, title: attrs.title, project: attrs.project } : timer
      )
    );
  };

  const handeRemoveTimer = (timerId) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== timerId));
  };

  const handleAddNewTimer = (timer) => {
    setTimers((prevTimers) => [newTimer(timer), ...prevTimers]);
  };

  const toggleTimer = (timerId) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === timerId ? { ...timer, isRunning: !timer.isRunning } : timer
      )
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.timerListContainer}>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false} onFormSubmit={handleAddNewTimer} />
          {timers.map(({ title, project, id, elapsed, isRunning }) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
              onFormSubmit={handleFormSubmit}
              onRemovePress={handeRemoveTimer}
              onStartPress={toggleTimer}
              onStopPress={toggleTimer}
            />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
  timerListContainer: {
    flex: 1,
  },
});

export default App;