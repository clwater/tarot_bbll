interface GuaEntity {
    index: number;
    name: string;
    image: string;
    name_detail: string;
    desc_detail: string;
    explains: GuaExplainsEntity[];
}

interface GuaExplainsEntity{
    type: number;
    base: string;
    explain: string;
    items: GuaExplainsItemEntity[];
}

interface GuaExplainsItemEntity{
    gua_explain_index: number;
    type: number;
    explain: string;
}