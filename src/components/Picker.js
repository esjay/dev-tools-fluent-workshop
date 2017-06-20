import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autocomplete from 'react-autocomplete';

export default class Picker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>{value}</h1>
        <Autocomplete
          getItemValue={(item) => item.label}
          items={[
            { label: 'apple' },
            { label: 'banana' },
            { label: 'pear' }
          ]}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onSelect={(val) => onChange(val)}
        />
        <select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}