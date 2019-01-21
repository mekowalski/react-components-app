# React Components App

This is for learning more about Components and the fundamentals

Kowalski, are you there?

## App Summary
- This Application I created to practice the basics of React Components
- I was able to Learn about Parent and Child(ren) Components
- `index.js` works as the Overall Parent, its Child is `WrappedCard` and Grandkid is `CommentDetail`
- `WrappedCard` is a Parent and its Child is `CommentDetail`
- `CommentDetail` has a few props of `author`, `timeAgo`, `commentText` and `avatar`
  - These props have been passed down from `index.js` while `CommentDetail` component has been wrapped and held within the `WrappedCard` component
