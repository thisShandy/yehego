import { useState } from "react";

import api from "~/common/model/api";

export const useCompanyCard = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteCard = async (cardId: string) => {
    setLoading(true);
    try {
      await api.card.deleteCompanyCard(cardId);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleDeleteCard
  };
};
