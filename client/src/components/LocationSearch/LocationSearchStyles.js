export default theme => ({
    '@global': {
        '.Select-input': {
            display: 'inline-flex !important',
            padding: 0,
            height: 'auto',
            fontSize: "25px",
            color: "red",
            background: "transparent",
            marginRight: "auto",
            marginLeft: "auto",
            border: 0
        },
        ".Select-value-label": {
            marginRight: "auto",
            marginLeft: "auto",
            background: "transparent",
            border: 0,
            color: "red"
        },
        '.Select-input input': {
            background: 'transparent',
            border: 0,
            padding: 0,
            cursor: 'default',
            display: 'inline-block',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            margin: 0,
            outline: 0,
            color: "white"
        },
        '.Select.is-focused:not(.is-open) > .Select-control': {
            boxShadow: 'none'
        },
        ".Select-arrow-zone": {
            display: "none"
        },
        ".Select-clear-zone": {
            display: "none"
        },
        ".Select-control": {
            background: "transparent",
            borderWidth: 0
        },
        ".Select.has-value.is-clearable.Select--single > .Select-control .Select-value ": {
            paddingLeft: 0,
            paddingRight: 0
        },
        "div.is-focused>.Select-control": {
            background: "transparent !important"
        }
    },
});