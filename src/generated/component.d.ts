import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type component = $Result.DefaultSelection<$componentPayload>


/**
   * Model component
   */

export type AggregateComponent = {
    _count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
  }

  export type ComponentAvgAggregateOutputType = {
    id: number | null
  }

  export type ComponentSumAggregateOutputType = {
    id: number | null
  }

  export type ComponentMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type ComponentMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type ComponentCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type ComponentAvgAggregateInputType = {
    id?: true
  }

  export type ComponentSumAggregateInputType = {
    id?: true
  }

  export type ComponentMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type ComponentMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type ComponentCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type ComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which component to aggregate.
     */
    where?: componentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of components to fetch.
     */
    orderBy?: componentOrderByWithRelationInput | componentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: componentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned components
    **/
    _count?: true | ComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentMaxAggregateInputType
  }

  export type GetComponentAggregateType<T extends ComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponent[P]>
      : GetScalarType<T[P], AggregateComponent[P]>
  }




  export type componentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: componentWhereInput
    orderBy?: componentOrderByWithAggregationInput | componentOrderByWithAggregationInput[]
    by: ComponentScalarFieldEnum[] | ComponentScalarFieldEnum
    having?: componentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentCountAggregateInputType | true
    _avg?: ComponentAvgAggregateInputType
    _sum?: ComponentSumAggregateInputType
    _min?: ComponentMinAggregateInputType
    _max?: ComponentMaxAggregateInputType
  }

  export type ComponentGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
  }

  type GetComponentGroupByPayload<T extends componentGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<ComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentGroupByOutputType[P]>
        }
      >
    >


  export type componentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["component"]>

  export type componentSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $componentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "component"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["component"]>
    composites: {}
  }


  type componentGetPayload<S extends boolean | null | undefined | componentDefaultArgs> = $Result.GetResult<$componentPayload, S>

  type componentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<componentFindManyArgs, 'select' | 'include'> & {
      select?: ComponentCountAggregateInputType | true
    }

  export interface componentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['component'], meta: { name: 'component' } }
    /**
     * Find zero or one Component that matches the filter.
     * @param {componentFindUniqueArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends componentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, componentFindUniqueArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Component that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {componentFindUniqueOrThrowArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends componentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, componentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Component that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {componentFindFirstArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends componentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, componentFindFirstArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Component that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {componentFindFirstOrThrowArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends componentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, componentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Components that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {componentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Components
     * const components = await prisma.component.findMany()
     * 
     * // Get first 10 Components
     * const components = await prisma.component.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentWithIdOnly = await prisma.component.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends componentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, componentFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$componentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Component.
     * @param {componentCreateArgs} args - Arguments to create a Component.
     * @example
     * // Create one Component
     * const Component = await prisma.component.create({
     *   data: {
     *     // ... data to create a Component
     *   }
     * })
     * 
    **/
    create<T extends componentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, componentCreateArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Components.
     *     @param {componentCreateManyArgs} args - Arguments to create many Components.
     *     @example
     *     // Create many Components
     *     const component = await prisma.component.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends componentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, componentCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Component.
     * @param {componentDeleteArgs} args - Arguments to delete one Component.
     * @example
     * // Delete one Component
     * const Component = await prisma.component.delete({
     *   where: {
     *     // ... filter to delete one Component
     *   }
     * })
     * 
    **/
    delete<T extends componentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, componentDeleteArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Component.
     * @param {componentUpdateArgs} args - Arguments to update one Component.
     * @example
     * // Update one Component
     * const component = await prisma.component.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends componentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, componentUpdateArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Components.
     * @param {componentDeleteManyArgs} args - Arguments to filter Components to delete.
     * @example
     * // Delete a few Components
     * const { count } = await prisma.component.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends componentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, componentDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {componentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Components
     * const component = await prisma.component.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends componentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, componentUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Component.
     * @param {componentUpsertArgs} args - Arguments to update or create a Component.
     * @example
     * // Update or create a Component
     * const component = await prisma.component.upsert({
     *   create: {
     *     // ... data to create a Component
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Component we want to update
     *   }
     * })
    **/
    upsert<T extends componentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, componentUpsertArgs<ExtArgs>>
    ): Prisma__componentClient<$Result.GetResult<$componentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {componentCountArgs} args - Arguments to filter Components to count.
     * @example
     * // Count the number of Components
     * const count = await prisma.component.count({
     *   where: {
     *     // ... the filter for the Components we want to count
     *   }
     * })
    **/
    count<T extends componentCountArgs>(
      args?: Subset<T, componentCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComponentAggregateArgs>(args: Subset<T, ComponentAggregateArgs>): PrismaPromise<GetComponentAggregateType<T>>

    /**
     * Group by Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {componentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends componentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: componentGroupByArgs['orderBy'] }
        : { orderBy?: componentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, componentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the component model
   */
  readonly fields: componentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for component.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__componentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the component model
   */ 
  interface componentFieldRefs {
    readonly id: FieldRef<"component", 'Int'>
    readonly domain: FieldRef<"component", 'String'>
    readonly props: FieldRef<"component", 'Json'>
    readonly groups: FieldRef<"component", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * component findUnique
   */
  export type componentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * Filter, which component to fetch.
     */
    where: componentWhereUniqueInput
  }


  /**
   * component findUniqueOrThrow
   */
  export type componentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * Filter, which component to fetch.
     */
    where: componentWhereUniqueInput
  }


  /**
   * component findFirst
   */
  export type componentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * Filter, which component to fetch.
     */
    where?: componentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of components to fetch.
     */
    orderBy?: componentOrderByWithRelationInput | componentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for components.
     */
    cursor?: componentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of components.
     */
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }


  /**
   * component findFirstOrThrow
   */
  export type componentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * Filter, which component to fetch.
     */
    where?: componentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of components to fetch.
     */
    orderBy?: componentOrderByWithRelationInput | componentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for components.
     */
    cursor?: componentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of components.
     */
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }


  /**
   * component findMany
   */
  export type componentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * Filter, which components to fetch.
     */
    where?: componentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of components to fetch.
     */
    orderBy?: componentOrderByWithRelationInput | componentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing components.
     */
    cursor?: componentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` components.
     */
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }


  /**
   * component create
   */
  export type componentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * The data needed to create a component.
     */
    data: XOR<componentCreateInput, componentUncheckedCreateInput>
  }


  /**
   * component createMany
   */
  export type componentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many components.
     */
    data: componentCreateManyInput | componentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * component update
   */
  export type componentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * The data needed to update a component.
     */
    data: XOR<componentUpdateInput, componentUncheckedUpdateInput>
    /**
     * Choose, which component to update.
     */
    where: componentWhereUniqueInput
  }


  /**
   * component updateMany
   */
  export type componentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update components.
     */
    data: XOR<componentUpdateManyMutationInput, componentUncheckedUpdateManyInput>
    /**
     * Filter which components to update
     */
    where?: componentWhereInput
  }


  /**
   * component upsert
   */
  export type componentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * The filter to search for the component to update in case it exists.
     */
    where: componentWhereUniqueInput
    /**
     * In case the component found by the `where` argument doesn't exist, create a new component with this data.
     */
    create: XOR<componentCreateInput, componentUncheckedCreateInput>
    /**
     * In case the component was found with the provided `where` argument, update it with this data.
     */
    update: XOR<componentUpdateInput, componentUncheckedUpdateInput>
  }


  /**
   * component delete
   */
  export type componentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
    /**
     * Filter which component to delete.
     */
    where: componentWhereUniqueInput
  }


  /**
   * component deleteMany
   */
  export type componentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which components to delete
     */
    where?: componentWhereInput
  }


  /**
   * component without action
   */
  export type componentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the component
     */
    select?: componentSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type componentWhereInput = {
    AND?: componentWhereInput | componentWhereInput[]
    OR?: componentWhereInput[]
    NOT?: componentWhereInput | componentWhereInput[]
    id?: IntFilter<"component"> | number
    domain?: StringFilter<"component"> | string
    props?: JsonFilter<"component">
    groups?: JsonFilter<"component">
  }

  export type componentOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type componentWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: componentWhereInput | componentWhereInput[]
    OR?: componentWhereInput[]
    NOT?: componentWhereInput | componentWhereInput[]
    props?: JsonFilter<"component">
    groups?: JsonFilter<"component">
  }, "id" | "domain">

  export type componentOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: componentCountOrderByAggregateInput
    _avg?: componentAvgOrderByAggregateInput
    _max?: componentMaxOrderByAggregateInput
    _min?: componentMinOrderByAggregateInput
    _sum?: componentSumOrderByAggregateInput
  }

  export type componentScalarWhereWithAggregatesInput = {
    AND?: componentScalarWhereWithAggregatesInput | componentScalarWhereWithAggregatesInput[]
    OR?: componentScalarWhereWithAggregatesInput[]
    NOT?: componentScalarWhereWithAggregatesInput | componentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"component"> | number
    domain?: StringWithAggregatesFilter<"component"> | string
    props?: JsonWithAggregatesFilter<"component">
    groups?: JsonWithAggregatesFilter<"component">
  }

  export type componentCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type componentUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type componentUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type componentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type componentCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type componentUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type componentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type componentCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type componentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type componentMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type componentMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type componentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use componentDefaultArgs instead
     */
    export type componentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = componentDefaultArgs<ExtArgs>

    export const ComponentScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type ComponentScalarFieldEnum = (typeof ComponentScalarFieldEnum)[keyof typeof ComponentScalarFieldEnum]
    