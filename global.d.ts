type Song = {
    id: number;
    title: string;
    date: string;
    commentCount: number;
    shareCount: number;
    path: string;
  }
  
  type TabContent = {
    'All Songs': Song[];
    'History': Song[];
  }