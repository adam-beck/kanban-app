import React from 'react';
import Editable from './Editable.jsx';
import LaneActions from '../actions/LaneActions';
import Note from './Note.jsx';

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.renderNote = this.renderNote.bind(this);
  }

  render() {
    const notes = this.props.items;

    return (
      <ul className="notes">{notes.map(this.renderNote)}</ul>
    );
  }

  onMoveNote({sourceId, targetId}) {
    console.log('source', sourceId, 'target', targetId);
  }

  renderNote(note) {

    return (
      <Note className="note" onMove={LaneActions.move}
        id={note.id} key={`note${note.id}`}>
        <Editable
          value={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)}
          onDelete={this.props.onDelete.bind(null, note.id)} />
      </Note>
    );
  }
}

export default Notes;
