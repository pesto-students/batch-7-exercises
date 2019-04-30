## Questions

1) Could you find a possible use case for using previous state and previous properties values in `ComponentWillReceiveProps` and `ComponentDidUpdate` respectively? Explain.

2) `componentWillUnmount` lifecycle method is often used to clean up' external integrations from the component. Think about the use case like this: You have an event listener and you are listening for events like network change. Your event listeners use setState directly. What will happen if you unmount the component? Will the listeners keep on listening and calling setState? How can this lifecycle method help you to avoid such problems?

3) What are `refs` in React and why are they important?

4) A top-level component returns ```<Button/>``` from its render() method. What is the relationship between ```<Button/>``` and `this` in that Button’s ```render()```?

5) Does rendering ```<Button><Icon/></Button>``` guarantee that an Icon mounts? Elaborate.
