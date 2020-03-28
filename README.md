## InputAutocompleteVue

InputAutocompleteVue is my own component created in Vue js that handles the input text and filters out list depends upon the text specified. 

## Project setup
```
npm install --save Ahsan-J/inputAutocompletevue#master
```

## Example

```
<InputAutocomplete :dataList="groups" placeholder="Group By" :onSelect="onSelectGroup"/>
```

## Props

prop | default | required | type | description
---- | ------- | -------- | ---- | -----------
`placeholder` | "" | `false` | `String` | A placeholder for the Input tag
`dataList` | [] | `true` | `Array || Object` | List of all data that needs to be iterated.
`onSelect` | `undefined` | `true` | `Function` | Function that is triggered when selecting an Item from the list. `(item: typeof dataList) => void`

