import React from 'react'
import './App.css'
import '@zippytech/react-toolkit/DataGrid/index.css'

import shortid from 'shortid'
import DataGridFactory from '@zippytech/react-toolkit/DataGrid'

import SortableColumns from '@zippytech/react-toolkit/DataGrid/plugins/sortable-columns'
import GridFilters from '@zippytech/react-toolkit/DataGrid/plugins/filters'
import '@zippytech/react-toolkit/DataGrid/plugins/filters/index.css'
import GridMenus from '@zippytech/react-toolkit/DataGrid/plugins/menus'
import '@zippytech/react-toolkit/DataGrid/plugins/menus/index.css'

const DataGrid = DataGridFactory({
  plugins: [
    SortableColumns,
    GridMenus,
    GridFilters
  ]
})

class SpecialTestingGrid extends React.Component {
  getCfg () {
    const columns = [
      {
        id: shortid.generate(),
        defaultFlex: 1,
        header: 'Testing column for sorting',
        sort (a, b) {
          return a.col1.localeCompare(b.col1)
        },
        render ({ data }) {
          return data.col1
        }
      }
    ]

    const data = (new Array(100)).fill({}).map(() => {
      return {
        col1: shortid.generate()
      }
    })

    return {
      columns,
      data
    }
  }

  cfg = this.getCfg()

  render () {
    const { columns, data } = this.cfg
    console.log('STG:', this)

    return (
      <DataGrid
        columns={columns}
        dataSource={data}
      />
    )
  }
}

function App () {
  return (
    <div className='App'>
      <SpecialTestingGrid />
    </div>
  )
}

export default App
