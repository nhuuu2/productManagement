import React, { useState } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = ({ id, title, project, elapsed, isRunning, onFormSubmit, onRemovePress, onStartPress, onStopPress }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const openForm = () => setEditFormOpen(true);
  const closeForm = () => setEditFormOpen(false);

  const handleEditPress = () => openForm();
  const handleFormClose = () => closeForm();

  const handleSubmit = (timer) => {
    onFormSubmit(timer);
    closeForm();
  };

  return editFormOpen ? (
    <TimerForm 
    id={id} 
    title={title} 
    project={project} 
    onFormSubmit={handleSubmit} 
    onFormClose={handleFormClose} 
    />
    ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onEditPress={handleEditPress}
      onRemovePress={onRemovePress}
      onStartPress={onStartPress}
      onStopPress={onStopPress}
    />
  );
};

export default EditableTimer;