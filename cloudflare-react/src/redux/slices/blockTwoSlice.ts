import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface RoadRates {
  category1: number;
  category2: number;
  category3: number;
  category4: number;
  category5: number;
}

interface FundingResults {
  stateFunding: number;
  localFunding: number;
  totalFunding: number;
  details?: any;
}

export interface BlockTwoState {
  stateRoadBaseRate: number;
  stateRoadBaseYear: number; // Рік базового нормативу для державних доріг
  stateInflationIndexes: number[];
  stateRoadRates: RoadRates;
  localRoadBaseRate: number;
  localRoadBaseYear: number; // Рік базового нормативу для місцевих доріг
  localInflationIndexes: number[];
  localRoadRates: RoadRates;
  selectedRegions: string[]; // Массив выбранных областей, пустой массив = все области
  inflationIndex: number;
  fundingResults: FundingResults | null;
  worksheets: any[];
  selectedWorksheet: string;
  regionalData: any[]; // ⚠️ DEPRECATED: використовуйте stateRegionalData або localRegionalData
  regionalResults: any[];
  regionalResultsRoadType: 'state' | 'local' | null; // Тип доріг для regionalResults
  isEditingTable: boolean; // ✅ Стан редагування таблиці
  stateRegionalData: any[]; // ✅ Дані для державних доріг
  localRegionalData: any[]; // ✅ Дані для місцевих доріг
}

const initialState: BlockTwoState = {
  stateRoadBaseRate: 604.761,
  stateRoadBaseYear: 2023, // За замовчуванням рік 2023
  stateInflationIndexes: [10],
  stateRoadRates: {
    category1: 0,
    category2: 0,
    category3: 0,
    category4: 0,
    category5: 0,
  },
  localRoadBaseRate: 360.544,
  localRoadBaseYear: 2023, // За замовчуванням рік 2023
  localInflationIndexes: [10],
  localRoadRates: {
    category1: 0,
    category2: 0,
    category3: 0,
    category4: 0,
    category5: 0,
  },
  selectedRegions: [], // ✅ За замовчуванням показуємо всі області (пустой массив = все)
  inflationIndex: 1.25,
  fundingResults: null,
  worksheets: [],
  selectedWorksheet: '',
  regionalData: [],
  regionalResults: [],
  regionalResultsRoadType: null,
  isEditingTable: false, // ✅ За замовчуванням редагування вимкнено
  stateRegionalData: [], // ✅ Дані для державних доріг
  localRegionalData: [], // ✅ Дані для місцевих доріг
};

const blockTwoSlice = createSlice({
  name: 'blockTwo',
  initialState,
  reducers: {
    setStateRoadBaseRate: (state, action: PayloadAction<number>) => {
      state.stateRoadBaseRate = action.payload;
    },
    setStateRoadBaseYear: (state, action: PayloadAction<number>) => {
      state.stateRoadBaseYear = action.payload;
    },
    setStateInflationIndexes: (state, action: PayloadAction<number[]>) => {
      state.stateInflationIndexes = action.payload;
    },
    addStateInflationIndex: (state, action: PayloadAction<number>) => {
      state.stateInflationIndexes.push(action.payload);
    },
    removeStateInflationIndex: (state, action: PayloadAction<number>) => {
      if (state.stateInflationIndexes.length > 1) {
        state.stateInflationIndexes.splice(action.payload, 1);
      }
    },
    updateStateInflationIndex: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.stateInflationIndexes[action.payload.index] = action.payload.value;
    },
    setStateRoadRates: (state, action: PayloadAction<RoadRates>) => {
      state.stateRoadRates = action.payload;
    },
    setLocalRoadBaseRate: (state, action: PayloadAction<number>) => {
      state.localRoadBaseRate = action.payload;
    },
    setLocalRoadBaseYear: (state, action: PayloadAction<number>) => {
      state.localRoadBaseYear = action.payload;
    },
    setLocalInflationIndexes: (state, action: PayloadAction<number[]>) => {
      state.localInflationIndexes = action.payload;
    },
    addLocalInflationIndex: (state, action: PayloadAction<number>) => {
      state.localInflationIndexes.push(action.payload);
    },
    removeLocalInflationIndex: (state, action: PayloadAction<number>) => {
      if (state.localInflationIndexes.length > 1) {
        state.localInflationIndexes.splice(action.payload, 1);
      }
    },
    updateLocalInflationIndex: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.localInflationIndexes[action.payload.index] = action.payload.value;
    },
    setLocalRoadRates: (state, action: PayloadAction<RoadRates>) => {
      state.localRoadRates = action.payload;
    },
    setSelectedRegions: (state, action: PayloadAction<string[]>) => {
      state.selectedRegions = action.payload;
    },
    setInflationIndex: (state, action: PayloadAction<number>) => {
      state.inflationIndex = action.payload;
    },
    setFundingResults: (state, action: PayloadAction<FundingResults>) => {
      state.fundingResults = action.payload;
    },
    setWorksheets: (state, action: PayloadAction<any[]>) => {
      state.worksheets = action.payload;
    },
    setSelectedWorksheet: (state, action: PayloadAction<string>) => {
      state.selectedWorksheet = action.payload;
    },
    setRegionalData: (state, action: PayloadAction<any[]>) => {
      // ⚠️ DEPRECATED: використовуйте setStateRegionalData або setLocalRegionalData
      // Зберігаємо для зворотньої сумісності
      state.regionalData = JSON.parse(JSON.stringify(action.payload));
    },
    setStateRegionalData: (state, action: PayloadAction<any[]>) => {
      // ✅ Встановлює дані для державних доріг
      state.stateRegionalData = JSON.parse(JSON.stringify(action.payload));
    },
    setLocalRegionalData: (state, action: PayloadAction<any[]>) => {
      // ✅ Встановлює дані для місцевих доріг
      state.localRegionalData = JSON.parse(JSON.stringify(action.payload));
    },
    setRegionalResults: (state, action: PayloadAction<any[]>) => {
      // ✅ СЕРІАЛІЗАЦІЯ: видаляємо функції та некоректні дані
      state.regionalResults = JSON.parse(JSON.stringify(action.payload));
    },
    setRegionalResultsRoadType: (state, action: PayloadAction<'state' | 'local' | null>) => {
      state.regionalResultsRoadType = action.payload;
    },
    clearRegionalData: (state) => {
      // ✅ ОЧИЩЕННЯ: видаляємо всі регіональні дані
      state.regionalData = [];
      state.stateRegionalData = [];
      state.localRegionalData = [];
      state.regionalResults = [];
      state.regionalResultsRoadType = null;
      state.isEditingTable = false;
    },
    setIsEditingTable: (state, action: PayloadAction<boolean>) => {
      state.isEditingTable = action.payload;
    },
    resetBlockTwo: () => initialState,
  },
});

export const {
  setStateRoadBaseRate,
  setStateRoadBaseYear,
  setStateInflationIndexes,
  addStateInflationIndex,
  removeStateInflationIndex,
  updateStateInflationIndex,
  setStateRoadRates,
  setLocalRoadBaseRate,
  setLocalRoadBaseYear,
  setLocalInflationIndexes,
  addLocalInflationIndex,
  removeLocalInflationIndex,
  updateLocalInflationIndex,
  setLocalRoadRates,
  setSelectedRegions,
  setInflationIndex,
  setFundingResults,
  setWorksheets,
  setSelectedWorksheet,
  setRegionalData,
  setStateRegionalData,
  setLocalRegionalData,
  setRegionalResults,
  setRegionalResultsRoadType,
  clearRegionalData,
  setIsEditingTable,
  resetBlockTwo,
} = blockTwoSlice.actions;

export default blockTwoSlice.reducer;