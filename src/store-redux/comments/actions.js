export default {
    /**
     * Загрузка товара
     * @param id
     * @return {Function}
     */
    load: (id) => {
      return async (dispatch, getState, services) => {
        // Сброс текущего товара и установка признака ожидания загрузки
        dispatch({type: 'comments/load-start'});
  
        try {
          const res = await services.api.request({
            url: `/api/v1/comments?search[parent]=${id}&limit=*&fields=items(_id,text,dateCreate,author(profile(name)),parent(_id,_type)),count`
          });
          // Товар загружен успешно
          dispatch({type: 'comments/load-success', payload: {data: res.data.result.items}});
          console.log(res);
        } catch (e) {
          //Ошибка загрузки
          dispatch({type: 'comments/load-error'});
        }
      }
    },

    postComment: (_id, text, parent) => {
        return async (dispatch, getState, services) => {
            const obj = {
                parent,
                text
            }
            try {
                dispatch({type: 'comments/post-start'});
                const res = await services.api.request({
                    url: "/api/v1/comments",
                    method: "POST",
                    body: JSON.stringify(obj)
                })
                dispatch({type: 'comments/post-success'})
            }
            catch(e) {
                dispatch({type: 'comments/post-error'});
            }
        }
    }
  }
  