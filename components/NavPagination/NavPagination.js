
export function setPaginationMax(apiData, paginationElement) {
  console.log(apiData.info);
  const maxPages = apiData.info.pages;
  const nextPageCall = apiData.info.next;
  const currentPage = nextPageCall.split("=").pop() - 1;

  paginationElement.textContent = `${currentPage} / ${maxPages}`;
}
