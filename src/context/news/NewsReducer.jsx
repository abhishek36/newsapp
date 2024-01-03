const NewsReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        newsall: action.payload.news,
        topic: action.payload.topic,
      };
  }
};

export default NewsReducer;
