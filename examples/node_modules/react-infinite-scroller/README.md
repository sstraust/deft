# React Infinite Scroller

[![npm](https://img.shields.io/npm/dt/react-infinite-scroller.svg?style=flat-square)](https://www.npmjs.com/package/react-infinite-scroller)
[![npm](https://img.shields.io/npm/v/react-infinite-scroller.svg?style=flat-square)](https://www.npmjs.com/package/react-infinite-scroller)
[![npm](https://img.shields.io/npm/l/react-infinite-scroller.svg?style=flat-square)](https://github.com/danbovey/react-infinite-scroller/blob/master/LICENSE)

Infinitely load a grid or list of items in React. This component allows you to create a simple, lightweight infinite scrolling page or element by supporting both window and scrollable elements.

- ⏬ Ability to use window or a scrollable element
- 📏 No need to specify item heights
- 💬 Support for "chat history" (reverse) mode
- ✅ Fully unit tested and used in hundreds of production sites around the
  world!
- 📦 Lightweight alternative to other available React scroll libs ~ 2.2KB
  minified & gzipped

---

- [Demo](https://danbovey.uk/react-infinite-scroller/demo/)
- [Demo Source](https://github.com/danbovey/react-infinite-scroller/blob/master/docs/src/index.js)

## Installation

```
npm install react-infinite-scroller --save
```
```
yarn add react-infinite-scroller
```

## How to use

```js
import InfiniteScroll from 'react-infinite-scroller';
```

### Window scroll events

```js
<InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {items} // <-- This is the content you want to load
</InfiniteScroll>
```

### DOM scroll events

```js
<div style="height:700px;overflow:auto;">
    <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
    >
        {items}
    </InfiniteScroll>
</div>
```

### Custom parent element

You can define a custom `parentNode` element to base the scroll calulations on.

```js
<div style="height:700px;overflow:auto;" ref={(ref) => this.scrollParentRef = ref}>
    <div>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
            getScrollParent={() => this.scrollParentRef}
        >
            {items}
        </InfiniteScroll>
    </div>
</div>
```

## Props

| Name              | Required | Type         | Default   | Description                                                                                                                                                                         |
| :---------------- | :------- | :----------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`        | Yes      | `Node`   |           | Anything that can be rendered (same as PropType's Node) |
| `loadMore`        | Yes      | `Function`   |           | A callback when more items are requested by the user. Receives a single parameter specifying the page to load e.g. `function handleLoadMore(page) { /* load more items here */ }` } |
| `element`         |          | `Component`  | `'div'`   | Name of the element that the component should render as.                                                                                                                            |
| `hasMore`         |          | `Boolean`    | `false`   | Whether there are more items to be loaded. Event listeners are removed if `false`.                                                                                                  |
| `initialLoad`     |          | `Boolean`    | `true`    | Whether the component should load the first set of items.                                                                                                                           |
| `isReverse`       |          | `Boolean`    | `false`   | Whether new items should be loaded when user scrolls to the top of the scrollable area.                                                                                             |
| `loader`          |          | `Component`  |           | A React component to render while more items are loading. The parent component must have a unique key prop.                                                                         |
| `pageStart`       |          | `Number`     | `0`       | The number of the first page to load, With the default of `0`, the first page is `1`.                                                                                               |
| `getScrollParent` |          | `Function`   |           | Override method to return a different scroll listener if it's not the immediate parent of InfiniteScroll.                                                                           |
| `threshold`       |          | `Number`     | `250`     | The distance in pixels before the end of the items that will trigger a call to `loadMore`.                                                                                          |
| `useCapture`      |          | `Boolean`    | `false`   | Proxy to the `useCapture` option of the added event listeners.                                                                                                                      |
| `useWindow`       |          | `Boolean`    | `true`    | Add scroll listeners to the window, or else, the component's `parentNode`.                                                                                                          |

## Troubleshooting

### Double or non-stop calls to `loadMore`

If you experience double or non-stop calls to your `loadMore` callback, make
sure you have your CSS layout working properly before adding this component in.
Calculations are made based on the height of the container (the element the
component creates to wrap the items), so the height of the container must equal
the entire height of the items.

```css
.my-container {
  overflow: auto;
}
```

Some people have found success using [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component).

### But you should just add an `isLoading` prop!

This component doesn't make any assumptions about what you do in terms of API
calls. It's up to you to store whether you are currently loading items from an
API in your state/reducers so that you don't make overlapping API calls.

```js
loadMore() {
  if(!this.state.isLoading) {
    this.props.fetchItems();
  }
}
```
