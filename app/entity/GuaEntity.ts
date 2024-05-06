interface GuaEntity {
    index: number;
    name: string;
    image: string;
    name_detail: string;
    explains: GuaExplainsEntity[];
}

interface GuaExplainsEntity{
    type: number;
    base: string;
    explain: string;
    items: GuaExplainsItemEntity[];
}

interface GuaExplainsItemEntity{
    type: number;
    explain: string;
}