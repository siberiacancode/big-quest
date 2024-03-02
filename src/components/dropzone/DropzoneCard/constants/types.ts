export type FileType = 'image' | 'docs';

export const acceptFileTypes = {
  image: {
    'image/*': []
  },
  docs: {
    '.doc, .docx, .pdf': [
      '.docx',
      '.doc',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
  }
};
