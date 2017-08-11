import React, {PropTypes} from 'react'

import DatabaseList from 'src/data_explorer/components/DatabaseList'
import MeasurementList from 'src/data_explorer/components/MeasurementList'
import FieldList from 'src/data_explorer/components/FieldList'

const actionBinder = (id, action) => item => action(id, item)

const SchemaExplorer = ({
  query,
  query: {id},
  actions: {
    chooseTag,
    groupByTag,
    groupByTime,
    chooseNamespace,
    chooseMeasurement,
    applyFuncsToField,
    toggleTagAcceptance,
    toggleFieldWithGroupByInterval,
  },
}) =>
  <div className="query-builder">
    <DatabaseList
      query={query}
      onChooseNamespace={actionBinder(id, chooseNamespace)}
    />
    <MeasurementList
      query={query}
      onChooseTag={actionBinder(id, chooseTag)}
      onGroupByTag={actionBinder(id, groupByTag)}
      onChooseMeasurement={actionBinder(id, chooseMeasurement)}
      onToggleTagAcceptance={actionBinder(id, toggleTagAcceptance)}
    />
    <FieldList
      query={query}
      onToggleField={actionBinder(id, toggleFieldWithGroupByInterval)}
      onGroupByTime={actionBinder(id, groupByTime)}
      applyFuncsToField={actionBinder(id, applyFuncsToField)}
    />
  </div>

const {func, shape, string} = PropTypes

SchemaExplorer.propTypes = {
  query: shape({
    id: string,
  }).isRequired,
  actions: shape({
    chooseNamespace: func.isRequired,
    chooseMeasurement: func.isRequired,
    applyFuncsToField: func.isRequired,
    chooseTag: func.isRequired,
    groupByTag: func.isRequired,
    toggleField: func.isRequired,
    groupByTime: func.isRequired,
    toggleTagAcceptance: func.isRequired,
    editRawTextAsync: func.isRequired,
  }).isRequired,
}

export default SchemaExplorer
