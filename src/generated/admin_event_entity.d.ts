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

export type admin_event_entity = $Result.DefaultSelection<$admin_event_entityPayload>


/**
   * Model admin_event_entity
   */

export type AggregateAdmin_event_entity = {
    _count: Admin_event_entityCountAggregateOutputType | null
    _avg: Admin_event_entityAvgAggregateOutputType | null
    _sum: Admin_event_entitySumAggregateOutputType | null
    _min: Admin_event_entityMinAggregateOutputType | null
    _max: Admin_event_entityMaxAggregateOutputType | null
  }

  export type Admin_event_entityAvgAggregateOutputType = {
    id: number | null
  }

  export type Admin_event_entitySumAggregateOutputType = {
    id: number | null
  }

  export type Admin_event_entityMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Admin_event_entityMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Admin_event_entityCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Admin_event_entityAvgAggregateInputType = {
    id?: true
  }

  export type Admin_event_entitySumAggregateInputType = {
    id?: true
  }

  export type Admin_event_entityMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Admin_event_entityMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Admin_event_entityCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Admin_event_entityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_event_entity to aggregate.
     */
    where?: admin_event_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_event_entitys to fetch.
     */
    orderBy?: admin_event_entityOrderByWithRelationInput | admin_event_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_event_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_event_entitys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_event_entitys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_event_entitys
    **/
    _count?: true | Admin_event_entityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_event_entityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_event_entitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_event_entityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_event_entityMaxAggregateInputType
  }

  export type GetAdmin_event_entityAggregateType<T extends Admin_event_entityAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_event_entity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_event_entity[P]>
      : GetScalarType<T[P], AggregateAdmin_event_entity[P]>
  }




  export type admin_event_entityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_event_entityWhereInput
    orderBy?: admin_event_entityOrderByWithAggregationInput | admin_event_entityOrderByWithAggregationInput[]
    by: Admin_event_entityScalarFieldEnum[] | Admin_event_entityScalarFieldEnum
    having?: admin_event_entityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_event_entityCountAggregateInputType | true
    _avg?: Admin_event_entityAvgAggregateInputType
    _sum?: Admin_event_entitySumAggregateInputType
    _min?: Admin_event_entityMinAggregateInputType
    _max?: Admin_event_entityMaxAggregateInputType
  }

  export type Admin_event_entityGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Admin_event_entityCountAggregateOutputType | null
    _avg: Admin_event_entityAvgAggregateOutputType | null
    _sum: Admin_event_entitySumAggregateOutputType | null
    _min: Admin_event_entityMinAggregateOutputType | null
    _max: Admin_event_entityMaxAggregateOutputType | null
  }

  type GetAdmin_event_entityGroupByPayload<T extends admin_event_entityGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Admin_event_entityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_event_entityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_event_entityGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_event_entityGroupByOutputType[P]>
        }
      >
    >


  export type admin_event_entitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["admin_event_entity"]>

  export type admin_event_entitySelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $admin_event_entityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_event_entity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["admin_event_entity"]>
    composites: {}
  }


  type admin_event_entityGetPayload<S extends boolean | null | undefined | admin_event_entityDefaultArgs> = $Result.GetResult<$admin_event_entityPayload, S>

  type admin_event_entityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<admin_event_entityFindManyArgs, 'select' | 'include'> & {
      select?: Admin_event_entityCountAggregateInputType | true
    }

  export interface admin_event_entityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['admin_event_entity'], meta: { name: 'admin_event_entity' } }
    /**
     * Find zero or one Admin_event_entity that matches the filter.
     * @param {admin_event_entityFindUniqueArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends admin_event_entityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityFindUniqueArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin_event_entity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {admin_event_entityFindUniqueOrThrowArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends admin_event_entityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin_event_entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityFindFirstArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends admin_event_entityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindFirstArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin_event_entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityFindFirstOrThrowArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends admin_event_entityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admin_event_entitys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_event_entitys
     * const admin_event_entitys = await prisma.admin_event_entity.findMany()
     * 
     * // Get first 10 Admin_event_entitys
     * const admin_event_entitys = await prisma.admin_event_entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_event_entityWithIdOnly = await prisma.admin_event_entity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends admin_event_entityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin_event_entity.
     * @param {admin_event_entityCreateArgs} args - Arguments to create a Admin_event_entity.
     * @example
     * // Create one Admin_event_entity
     * const Admin_event_entity = await prisma.admin_event_entity.create({
     *   data: {
     *     // ... data to create a Admin_event_entity
     *   }
     * })
     * 
    **/
    create<T extends admin_event_entityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityCreateArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admin_event_entitys.
     *     @param {admin_event_entityCreateManyArgs} args - Arguments to create many Admin_event_entitys.
     *     @example
     *     // Create many Admin_event_entitys
     *     const admin_event_entity = await prisma.admin_event_entity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends admin_event_entityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_event_entity.
     * @param {admin_event_entityDeleteArgs} args - Arguments to delete one Admin_event_entity.
     * @example
     * // Delete one Admin_event_entity
     * const Admin_event_entity = await prisma.admin_event_entity.delete({
     *   where: {
     *     // ... filter to delete one Admin_event_entity
     *   }
     * })
     * 
    **/
    delete<T extends admin_event_entityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityDeleteArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin_event_entity.
     * @param {admin_event_entityUpdateArgs} args - Arguments to update one Admin_event_entity.
     * @example
     * // Update one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends admin_event_entityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityUpdateArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admin_event_entitys.
     * @param {admin_event_entityDeleteManyArgs} args - Arguments to filter Admin_event_entitys to delete.
     * @example
     * // Delete a few Admin_event_entitys
     * const { count } = await prisma.admin_event_entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends admin_event_entityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_event_entitys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_event_entitys
     * const admin_event_entity = await prisma.admin_event_entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends admin_event_entityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_event_entity.
     * @param {admin_event_entityUpsertArgs} args - Arguments to update or create a Admin_event_entity.
     * @example
     * // Update or create a Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.upsert({
     *   create: {
     *     // ... data to create a Admin_event_entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_event_entity we want to update
     *   }
     * })
    **/
    upsert<T extends admin_event_entityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityUpsertArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admin_event_entitys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityCountArgs} args - Arguments to filter Admin_event_entitys to count.
     * @example
     * // Count the number of Admin_event_entitys
     * const count = await prisma.admin_event_entity.count({
     *   where: {
     *     // ... the filter for the Admin_event_entitys we want to count
     *   }
     * })
    **/
    count<T extends admin_event_entityCountArgs>(
      args?: Subset<T, admin_event_entityCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_event_entityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_event_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_event_entityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_event_entityAggregateArgs>(args: Subset<T, Admin_event_entityAggregateArgs>): PrismaPromise<GetAdmin_event_entityAggregateType<T>>

    /**
     * Group by Admin_event_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityGroupByArgs} args - Group by arguments.
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
      T extends admin_event_entityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_event_entityGroupByArgs['orderBy'] }
        : { orderBy?: admin_event_entityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, admin_event_entityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_event_entityGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the admin_event_entity model
   */
  readonly fields: admin_event_entityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_event_entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_event_entityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the admin_event_entity model
   */ 
  interface admin_event_entityFieldRefs {
    readonly id: FieldRef<"admin_event_entity", 'Int'>
    readonly domain: FieldRef<"admin_event_entity", 'String'>
    readonly props: FieldRef<"admin_event_entity", 'Json'>
    readonly groups: FieldRef<"admin_event_entity", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * admin_event_entity findUnique
   */
  export type admin_event_entityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * Filter, which admin_event_entity to fetch.
     */
    where: admin_event_entityWhereUniqueInput
  }


  /**
   * admin_event_entity findUniqueOrThrow
   */
  export type admin_event_entityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * Filter, which admin_event_entity to fetch.
     */
    where: admin_event_entityWhereUniqueInput
  }


  /**
   * admin_event_entity findFirst
   */
  export type admin_event_entityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * Filter, which admin_event_entity to fetch.
     */
    where?: admin_event_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_event_entitys to fetch.
     */
    orderBy?: admin_event_entityOrderByWithRelationInput | admin_event_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_event_entitys.
     */
    cursor?: admin_event_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_event_entitys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_event_entitys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_event_entitys.
     */
    distinct?: Admin_event_entityScalarFieldEnum | Admin_event_entityScalarFieldEnum[]
  }


  /**
   * admin_event_entity findFirstOrThrow
   */
  export type admin_event_entityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * Filter, which admin_event_entity to fetch.
     */
    where?: admin_event_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_event_entitys to fetch.
     */
    orderBy?: admin_event_entityOrderByWithRelationInput | admin_event_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_event_entitys.
     */
    cursor?: admin_event_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_event_entitys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_event_entitys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_event_entitys.
     */
    distinct?: Admin_event_entityScalarFieldEnum | Admin_event_entityScalarFieldEnum[]
  }


  /**
   * admin_event_entity findMany
   */
  export type admin_event_entityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * Filter, which admin_event_entitys to fetch.
     */
    where?: admin_event_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_event_entitys to fetch.
     */
    orderBy?: admin_event_entityOrderByWithRelationInput | admin_event_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_event_entitys.
     */
    cursor?: admin_event_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_event_entitys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_event_entitys.
     */
    skip?: number
    distinct?: Admin_event_entityScalarFieldEnum | Admin_event_entityScalarFieldEnum[]
  }


  /**
   * admin_event_entity create
   */
  export type admin_event_entityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * The data needed to create a admin_event_entity.
     */
    data: XOR<admin_event_entityCreateInput, admin_event_entityUncheckedCreateInput>
  }


  /**
   * admin_event_entity createMany
   */
  export type admin_event_entityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_event_entitys.
     */
    data: admin_event_entityCreateManyInput | admin_event_entityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * admin_event_entity update
   */
  export type admin_event_entityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * The data needed to update a admin_event_entity.
     */
    data: XOR<admin_event_entityUpdateInput, admin_event_entityUncheckedUpdateInput>
    /**
     * Choose, which admin_event_entity to update.
     */
    where: admin_event_entityWhereUniqueInput
  }


  /**
   * admin_event_entity updateMany
   */
  export type admin_event_entityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_event_entitys.
     */
    data: XOR<admin_event_entityUpdateManyMutationInput, admin_event_entityUncheckedUpdateManyInput>
    /**
     * Filter which admin_event_entitys to update
     */
    where?: admin_event_entityWhereInput
  }


  /**
   * admin_event_entity upsert
   */
  export type admin_event_entityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * The filter to search for the admin_event_entity to update in case it exists.
     */
    where: admin_event_entityWhereUniqueInput
    /**
     * In case the admin_event_entity found by the `where` argument doesn't exist, create a new admin_event_entity with this data.
     */
    create: XOR<admin_event_entityCreateInput, admin_event_entityUncheckedCreateInput>
    /**
     * In case the admin_event_entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_event_entityUpdateInput, admin_event_entityUncheckedUpdateInput>
  }


  /**
   * admin_event_entity delete
   */
  export type admin_event_entityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
    /**
     * Filter which admin_event_entity to delete.
     */
    where: admin_event_entityWhereUniqueInput
  }


  /**
   * admin_event_entity deleteMany
   */
  export type admin_event_entityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_event_entitys to delete
     */
    where?: admin_event_entityWhereInput
  }


  /**
   * admin_event_entity without action
   */
  export type admin_event_entityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_event_entity
     */
    select?: admin_event_entitySelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type admin_event_entityWhereInput = {
    AND?: admin_event_entityWhereInput | admin_event_entityWhereInput[]
    OR?: admin_event_entityWhereInput[]
    NOT?: admin_event_entityWhereInput | admin_event_entityWhereInput[]
    id?: IntFilter<"admin_event_entity"> | number
    domain?: StringFilter<"admin_event_entity"> | string
    props?: JsonFilter<"admin_event_entity">
    groups?: JsonFilter<"admin_event_entity">
  }

  export type admin_event_entityOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type admin_event_entityWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: admin_event_entityWhereInput | admin_event_entityWhereInput[]
    OR?: admin_event_entityWhereInput[]
    NOT?: admin_event_entityWhereInput | admin_event_entityWhereInput[]
    props?: JsonFilter<"admin_event_entity">
    groups?: JsonFilter<"admin_event_entity">
  }, "id" | "domain">

  export type admin_event_entityOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: admin_event_entityCountOrderByAggregateInput
    _avg?: admin_event_entityAvgOrderByAggregateInput
    _max?: admin_event_entityMaxOrderByAggregateInput
    _min?: admin_event_entityMinOrderByAggregateInput
    _sum?: admin_event_entitySumOrderByAggregateInput
  }

  export type admin_event_entityScalarWhereWithAggregatesInput = {
    AND?: admin_event_entityScalarWhereWithAggregatesInput | admin_event_entityScalarWhereWithAggregatesInput[]
    OR?: admin_event_entityScalarWhereWithAggregatesInput[]
    NOT?: admin_event_entityScalarWhereWithAggregatesInput | admin_event_entityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin_event_entity"> | number
    domain?: StringWithAggregatesFilter<"admin_event_entity"> | string
    props?: JsonWithAggregatesFilter<"admin_event_entity">
    groups?: JsonWithAggregatesFilter<"admin_event_entity">
  }

  export type admin_event_entityCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type admin_event_entityUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type admin_event_entityUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type admin_event_entityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type admin_event_entityCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type admin_event_entityUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type admin_event_entityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type admin_event_entityCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type admin_event_entityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type admin_event_entityMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type admin_event_entityMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type admin_event_entitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use admin_event_entityDefaultArgs instead
     */
    export type admin_event_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = admin_event_entityDefaultArgs<ExtArgs>

    export const Admin_event_entityScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Admin_event_entityScalarFieldEnum = (typeof Admin_event_entityScalarFieldEnum)[keyof typeof Admin_event_entityScalarFieldEnum]
    