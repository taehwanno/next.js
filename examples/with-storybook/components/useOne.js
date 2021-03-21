import { useMemo } from 'react';

export default function useOne() {
  return useMemo(() => 1, []);
}
