import axios from "axios";

export async function createExhibition(title, startDate, endDate, type, content, isClicked, arts) {

  try {
    const res = await axios.post(
      "https://art-ground.link/exhibition/register",
      {
        title: title,
        startDate: startDate,
        endDate: endDate,
        exhibitType: type,
        genreHashtags: JSON.stringify(isClicked),
        exhibitInfo: content,
        images: JSON.stringify(arts) //작품 9개
        // arts = [{title: , content: , subContent: ,img: }, {}, ... , {}]
        // arts[0].img
      });
    console.log(res);
  } catch (err) {
    return console.log(err.message);
  }

}

export async function getStandardGallery() {
  try {
    const res = await axios.get(
      "https://art-ground.link/exhibition/1" //파라미터 요청(standard) & 승인이 된 것만(status=1)
    );
    return res.data.data;
  } catch (err) {
    return console.log(err.message);
  }
}

export async function getPremiumGallery() {
  try {
    const res = await axios.get(
      "https://art-ground.link/exhibition/2" //파라미터 요청(premium) & 승인이 된 것만(status=1)
    );
    return res.data.data;
  } catch (err) {
    return console.log(err.message);
  }
}


export async function createLike(el) {
  console.log("클릭한 전시회 아이디:", el);
  try {
    const res = await axios.post(
      "https://art-ground.link/exhibition/like",
      {
        postId: el
      });
    console.log(res);
  } catch (err) {
    return console.log(err);
  }
}

export async function deleteLike(el) {
  console.log("클릭한 전시회 아이디:", el);
  try {
    const res = await axios.delete(
      "https://art-ground.link/exhibition/like",
      {
        postId: el
      });
    console.log(res);
  } catch (err) {
    return console.log(err);
  }
}


export function sort(galleryList, sortValue, isStandard) {
  console.log("정렬 테스트중", galleryList, sortValue, isStandard);
  // if(value==='최신순'){
  //   let result = galleryList.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  //   result = result.map((el) => {
  //     return {
  //       ...el, tags: JSON.parse(el.tags),//파싱 필요한 요소는 모두 나열해야 함
  //     };
  //   })
  // } else if(value==='인기순'){
  //   let result = galleryList.sort((a, b) => (b.likes.length) - (a.likes.length));
  //   result = result.map((el) => {
  //     return {
  //       ...el, tags: JSON.parse(el.tags),
  //     };
  //   })
  // } else{ //전시마감일순
  //   let result = galleryList.sort((a, b) => (b.end_date) - (a.end_date));
  //   result = result.map((el) => {
  //     return {
  //       ...el, tags: JSON.parse(el.tags),
  //     };
  //   })
  // }
}

export function filterByTag(tag, sortValue, isStandard) {
  console.log("태그 필터링 테스트중", tag, sortValue, isStandard);

  // if (tag === "전체") {
  //   axios
  //     .get(
  //       "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/get-all-post"
  //     )
  //     .then((res) => {
  //       if(sortValue === '최신순'){
  //       let result = res.data.data.sort((a, b) => {
  //         return new Date(b.created_at) - new Date(a.created_at);
  //       });
  //       setFeeds(
  //         result.map((el) => {
  //           return {...el, tags: JSON.parse(el.tags),
  //         }}))
  //       } else if(sortValue==='인기순'){
  //         let result = res.data.data.sort((a, b) => {
  //           return (b.option1_count+b.option2_count) - (a.option1_count+a.option2_count);
  //         });
  //         setFeeds(
  //           result.map((el) => {
  //             return {...el, tags: JSON.parse(el.tags),
  //           }}))
  //       }
  //     });
  // } else {
  //   axios
  //     .get(
  //       "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/get-all-post"
  //     )
  //     .then((res) => {
  //       let result = res.data.data.sort((a, b) => {
  //         return new Date(b.created_at) - new Date(a.created_at);
  //       }); //최신순으로 정렬
  //       if(sortValue==='인기순'){
  //         result = res.data.data.sort((a, b) => {
  //           return (b.option1_count+b.option2_count) - (a.option1_count+a.option2_count);
  //         })
  //       }
  //       result = result.map((el) => {
  //         return {...el, tags: JSON.parse(el.tags),
  //         };
  //       }); //배열 파싱하고...
  //       result = result.filter((el) => el.tags.includes(tag));
  //       setFeeds(result);
  //     });
  // }
}
