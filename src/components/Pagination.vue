<template>
  <div class="pagination">
    <span class="pagination__total">Total: {{ total }}</span>
    <span class="pagination__page">Page {{ page }} of {{ pageLast }}</span>

    <button class="pagination__btn pagination__btn_first" @click="onChange(1)">
      First
    </button>
    <button class="pagination__btn" @click="onChange(pagePrev)">
      Prev
    </button>
    <button class="pagination__btn" @click="onChange(pageNext)">
      Next
    </button>
    <button
      class="pagination__btn pagination__btn_last"
      @click="onChange(pageLast)"
    >
      Last
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Inject } from '@vue-ioc/core';
import { PaginationService } from '@/services/PaginationService';

@Component({})
export default class Pagination extends Vue {
  @Inject()
  public paginationService!: PaginationService;

  @Prop({ required: true })
  private page!: number;

  @Prop({ required: true })
  private limit!: number;

  @Prop({ required: true })
  private total!: number;

  get pageLast(): number {
    return this.paginationService.pageLast(this.total, this.limit);
  }

  get pagePrev(): number {
    return this.paginationService.pagePrev(this.page);
  }

  get pageNext(): number {
    return this.paginationService.pageNext(this.page, this.pageLast);
  }

  onChange(page: number): void {
    this.$emit('change', page);
  }
}
</script>

<style>
.pagination__total {
  margin-right: 15px;
}
.pagination__page {
  margin-right: 15px;
}
.pagination__btn {
  background-color: #a5c6d6;
  border: none;
  width: 90px;
  padding: 5px 0;
  cursor: pointer;
  margin-left: 5px;
  font-size: 0.9rem;
  color: #0d365a;
}
.pagination__btn:hover {
  background-color: #5cb9e6;
  transition: background-color 0.5s;
}
.pagination__btn_first {
  border-radius: 8px 0 0 8px;
}
.pagination__btn_last {
  border-radius: 0 8px 8px 0;
}
</style>
