const dialogTrans = {
  deleteTipAction: '类型',
  deleteTipPurpose: '以确认。',
  deleteTitle: `删除 {{type}}`,
  renameTitle: `重命名 {{type}}`,
  releaseTitle: `发布 {{type}}`,
  duplicateTitle: `复制 {{type}}`,
  createAlias: `为 {{type}} 创建别名`,
  compact: `压缩Collection {{type}}`,
  flush: `为 {{type}} 的数据落盘`,
  loadTitle: `加载 {{type}}`,

  loadContent: `您正在尝试加载带有数据的 {{type}}。只有已加载的 {{type}} 可以被搜索。`,
  releaseContent: `您正在尝试发布带有数据的 {{type}}。请注意，数据将不再可用于搜索。`,

  createTitle: `在 "{{name}}" 上创建 {{type}}`,
  emptyTitle: `清空{{type}}的数据`,

  // info
  duplicateCollectionInfo:
    '复制Collection不会复制Collection中的数据。它只会使用现有的Schema创建一个新的Collection。',
  flushDialogInfo: `落盘是一个在数据被插入到Milvus后，封闭和索引任何剩余段的过程。这避免了在未封闭的段上进行暴力搜索。  <br /><br />最好在插入会话结束时使用落盘，以防止数据碎片化。 <br /><br /><strong>注意：对于大型数据集，此操作可能需要一些时间。</strong>`,
  emptyDataDialogInfo: `您正在尝试清空数据。此操作无法撤销，请谨慎操作。`,
};

export default dialogTrans;
