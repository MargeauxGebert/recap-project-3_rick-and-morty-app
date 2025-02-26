export function setPaginationMax(apiData, paginationElement) {
  const maxPages = apiData.info.pages;
  const nextPageCall = apiData.info.next;
  const currentPage = nextPageCall.split("=").pop() - 1;

  paginationElement.textValue = `${currentPage} / ${maxPages}`;
}
